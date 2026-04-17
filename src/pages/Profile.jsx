import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEdit(false);
    alert("Profile Updated ✅");
  };

  return (
    <div className="page">
      <h1>My Profile 👤</h1>

      <div className="profile-card">

        {/* VIEW MODE */}
        {!edit ? (
          <>
            <p><b>Name:</b> {user.name || "Not set"}</p>
            <p><b>Email:</b> {user.email || "Not set"}</p>
            <p><b>Contact:</b> {user.contact || "Not set"}</p>

            <button onClick={() => setEdit(true)}>
              Edit Profile
            </button>
          </>
        ) : (
          /* EDIT MODE */
          <>
            <input
              type="text"
              placeholder="Enter Name"
              value={user.name}
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Enter Contact"
              value={user.contact}
              onChange={(e) =>
                setUser({ ...user, contact: e.target.value })
              }
            />

            <button onClick={handleSave}>Save</button>
          </>
        )}

      </div>
    </div>
  );
}