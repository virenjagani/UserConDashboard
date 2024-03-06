import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEARE_MESSAGE,
  GET_USER_ALL,
  GET_USER_DELETE,
} from "../Redux/Reducers/UserReducer";
import { RootState } from "../Redux/store";
import Table from "react-bootstrap/Table";
import { Link, NavLink } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
function UserList() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    //get all users from the redux store during initiallizing userList page. 
    dispatch({ type: GET_USER_ALL });
  }, []);

  useEffect(() => {
    //If get success message from BE. 
    if (user.message) {
      toast.success(user.message);
      // clear message to avoid success message on every render
      dispatch({ type: CLEARE_MESSAGE });
      //get all. users
      dispatch({ type: GET_USER_ALL });
    }
  }, [user.message]);

  //delete function
  const handleDelete = (id: string) => {
    //delete user
    dispatch({ type: GET_USER_DELETE, payload: { _id: id } });
  };

  return (
    <div>
      <Link className="m-3 btn btn-primary" to="/add">
        Add User
      </Link>
      {user.loading ? (
        <Spinner variant="primary" />
      ) : (
        <Table striped bordered hover variant="dark" size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.userData &&
              user.userData.map((item, index) => (
                <tr key={item._id}>
                  <td>{item.creator.name}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                    &nbsp;|&nbsp;
                    <NavLink
                      className="btn btn-primary"
                      to={`/edit/${item._id}`}
                    >
                      Edit
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default UserList;
