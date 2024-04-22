import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  console.log(watch());
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <label>Example</label>
      <input
        {...register("firstName", { required: "This is required." })}
        type="text"
        placeholder="First Name"
      />
      {errors.firstName && <p>{errors.firstName?.message}</p>}
      <input
        {...register("lastName", {
          required: "This is required.",
          minLength: { value: 4, message: "Min length is 4" },
        })}
        type="text"
        placeholder="Last Name"
      />
      {errors.lastName && <p>{errors.lastName?.message}</p>}
      <input type="submit" />
    </form>
  );
}

export default App;
