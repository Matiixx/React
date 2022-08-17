import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import "./Form.scss";

export default function Form() {
  const formSchema = yup.object().shape({
    fullName: yup.string().min(4).required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(15).required(),
    password: yup.string().min(6).max(22).required(),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("submitted", data);
  };

  return (
    <div className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <form>
        <input
          type={"text"}
          placeholder={"Full name..."}
          {...register("fullName")}
        />
        <label className="error-message-label">
          {errors.fullName?.message}
        </label>
        <input type={"text"} placeholder={"Email..."} {...register("email")} />
        <label className="error-message-label">{errors.email?.message}</label>
        <input type={"number"} placeholder={"Age..."} {...register("age")} />
        <label className="error-message-label">{errors.age?.message}</label>
        <input
          type={"password"}
          placeholder={"Password..."}
          {...register("password")}
        />
        <label className="error-message-label">
          {errors.password?.message}
        </label>
        <input
          type={"password"}
          placeholder={"Repeat password..."}
          {...register("passwordRepeat")}
        />
        <label className="error-message-label">
          {errors.passwordRepeat?.message}
        </label>
        <input type={"submit"} />
      </form>
    </div>
  );
}
