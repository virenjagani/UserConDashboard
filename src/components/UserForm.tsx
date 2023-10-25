import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FormikFormValuesProps } from "./UserValueTypes.types";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  GET_USER_ADD,
  GET_USER_EDIT,
  GET_USER_OBJECT,
} from "../Redux/Reducers/UserReducer";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { useNavigate, useParams } from "react-router-dom";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

function UserForm() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const [paramPrev, setParamPrev] = useState<string>();

  useEffect(() => {
    if (param.id && param.id !== paramPrev) {
      setParamPrev(param.id);
      const paramObj = { _id: param.id };
      dispatch({ type: GET_USER_OBJECT, payload: paramObj });
    }
  }, [param]);

  useEffect(() => {
    if (user.message) {
      navigate("/list");
    }
  }, [user.message]);

  useEffect(() => {}, []);

  return (
    <div>
      {user.loading ? (
        <Spinner variant="primary" />
      ) : (
        <Formik
          initialValues={
            user.userObject && param.id
              ? {
                  title: user.userObject.title,
                  description: user.userObject.description,
                }
              : {
                  title: "",
                  description: "",
                }
          }
          validationSchema={validationSchema}
          onSubmit={(values: FormikFormValuesProps) => {
            console.log(values);
            if (param.id && user.userObject) {
              const editedUserTitleObj = {
                _id: param.id,
                title: values.title,
              };
              dispatch({ type: GET_USER_EDIT, payload: editedUserTitleObj });
            } else {
              dispatch({ type: GET_USER_ADD, payload: values });
            }
          }}
        >
          {() => (
            <Form>
              <Field
                name="title"
                placeholder="Title"
                className="border border-3 border-dark m-3 w-50 p-2"
                id="title"
              />
              <ErrorMessage name="title" id="title" className="text-danger" />
              <Field
                name="description"
                placeholder="Description"
                className="border border-3 border-dark m-3 w-50 p-2"
                id="description"
              />
              <ErrorMessage
                name="description"
                id="description"
                className="text-danger"
              />
              <br />
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default UserForm;
