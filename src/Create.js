import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [ssn, setSSN] = useState("");
  const [question, setQuestion] = useState("NO");
  const [licensePlate, setLicensePlate] = useState("");
  const [isShowing, setIsShowing] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmit1 = (e) => {
    e.preventDefault();

    const blog = {
      lastName,
      firstName,
      streetName,
      streetNo,
      city,
      state,
      phoneNo,
      ssn,
      question,
      licensePlate,
    };

    setIsPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      // history.go(-1);
      history.push("/");
      setIsPending(false);
    });
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className="create">
      <h2>New Client</h2>
      <form onSubmit={(handleSubmit(onSubmit), handleSubmit1)}>
        <label>Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          {...register("lastName", {
            required: "This is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "This is not a valid name",
            },
            maxLength: { value: 20, message: "This name is too long" },
          })}
          onChange={(e) => setLastName(e.target.value)}
          // required
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <label>First Name</label>
        <input
          id="firstName"
          type="text"
          // required
          value={firstName}
          {...register("firstName", {
            required: "This is required",
            pattern: {
              value: /^[a-z ,.'-]+$/i,
              message: "This is not a valid name",
            },
            maxLength: { value: 25, message: "This name is too long" },
          })}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <label>Street Name</label>
        <input
          id="street-name"
          type="text"
          value={streetName}
          {...register("streetName", {
            pattern: {
              value: /^[A-Za-z-'.]+$/i,
              message: "This is not a valid street name",
            },
            maxLength: { value: 20, message: "Max length exceeded" },
          })}
          onChange={(e) => setStreetName(e.target.value)}
        />
        {errors.streetName && <p>{errors.streetName.message}</p>}
        <label>Street Number</label>
        <input
          id="street-no"
          type="text"
          value={streetNo}
          {...register("streetNo", {
            pattern: {
              value: /^[0-9A-Za-z]+$/i,
              message: "This is not a valid street no",
            },
            maxLength: { value: 20, message: "Max length exceeded" },
          })}
          onChange={(e) => setStreetNo(e.target.value)}
        />
        {errors.streetNo && <p>{errors.streetNo.message}</p>}
        <label>City</label>
        <input
          id="city"
          type="text"
          // required
          value={city}
          {...register("city", {
            required: "This is required",
            pattern: {
              value: /^[A-Za-z-']+$/i,
              message: "This is not a city name",
            },
            maxLength: { value: 20, message: "Max length exceeded" },
          })}
          onChange={(e) => setCity(e.target.value)}
        />
        {errors.city && <p>{errors.city.message}</p>}
        <label>State</label>
        <input
          id="state"
          type="text"
          // required
          value={state}
          {...register("state", {
            required: "This is required",
            pattern: {
              value: /^[A-Za-z-']+$/i,
              message: "This is not a state name",
            },
            maxLength: { value: 20, message: "Max length exceeded" },
          })}
          onChange={(e) => setState(e.target.value)}
        />
        {errors.state && <p>{errors.state.message}</p>}
        <label>Phone Number</label>
        <input
          id="phone-no"
          type="text"
          // required
          value={phoneNo}
          {...register("phoneNo", {
            required: "This is required",
            pattern: {
              value: /^[0-9+-.]+$/i,
              message: "This is not a state name",
            },
            minLength: { value: 8, message: "Too short" },
            maxLength: { value: 15, message: "Max length exceeded" },
          })}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        {errors.phoneNo && <p>{errors.phoneNo.message}</p>}
        <label>Social Security Number</label>
        <input
          id="ssn"
          type="text"
          // required
          value={ssn}
          {...register("ssn", {
            required: "This is required",
            pattern: {
              value: /^[0-9]+$/i,
              message: "This is not a state name",
            },
            minLength: { value: 11, message: "Too short" },
            maxLength: { value: 20, message: "Max length exceeded" },
          })}
          onChange={(e) => setSSN(e.target.value)}
        />
        {errors.ssn && <p>{errors.ssn.message}</p>}
        <label>Own a car?</label>
        <select
          id="question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        >
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>

        {question === "YES" && (
          <div>
            <label>License Plate</label>
            <input
              id="license-plate"
              type="text"
              value={licensePlate}
              {...register("licensePlate", {
                pattern: {
                  value: /^[0-9a-zA-Z]+$/i,
                  message: "This is not a license plate number",
                },
                minLength: { value: 5, message: "Too short" },
                maxLength: { value: 10, message: "Max length exceeded" },
              })}
              onChange={(e) => setLicensePlate(e.target.value)}
            />
            {errors.licensePlate && <p>{errors.licensePlate.message}</p>}
          </div>
        )}

        {!isPending && <button>Add Client</button>}
        {isPending && <button>Adding Client</button>}
      </form>
    </div>
  );
};

export default Create;
