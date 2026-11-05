import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onAddTestUser = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const age = Number(formData.get("age"));

    if (!name || !Number.isInteger(age) || age < 0) {
      setMessage("Please enter a valid name and age.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/test-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      console.log("MongoDB response:", data);

      setMessage("User saved successfully!");
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to save user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>FoodTrace</h3>
      <h4>Test Add User Database</h4>

      <form onSubmit={onAddTestUser}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          min="0"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Add New User"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}