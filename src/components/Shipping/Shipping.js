import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="form-alignment">
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Write your name"
          defaultValue={user.displayName}
          {...register("name")}
        />
        <input
          placeholder="Write your email"
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input
          placeholder="Current address"
          defaultValue=""
          {...register("address")}
        />
        <input
          placeholder="Current city"
          defaultValue=""
          {...register("city")}
        />
        <input
          placeholder="Contact number"
          defaultValue=""
          {...register("phone")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
