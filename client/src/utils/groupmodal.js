import React, { useState } from "react";

const GroupModal = ({ setOpengroupmodal }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleCreateGroup = () => {
    console.log("Group Created:", { groupName, selectedUsers });
    setOpengroupmodal(false);
  };

  return (
    <>
      {/* Overlay with blur */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1050,
        }}
        onClick={() => setOpengroupmodal(false)}
      >
        {/* Modal Card */}
        <div
          className="rounded-4 shadow-lg p-4"
          style={{ width: "400px", background: "var(--secondary-color)" }}
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="m-0">Create Group</h4>
            <button
              className="btn-close"
              onClick={() => setOpengroupmodal(false)}
            ></button>
          </div>

          {/* Body */}
          <div className="mb-3">
            <label className="form-label">Group Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Select Users</label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="user1"
                value="User 1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedUsers([...selectedUsers, e.target.value]);
                  } else {
                    setSelectedUsers(
                      selectedUsers.filter((u) => u !== e.target.value)
                    );
                  }
                }}
              />
              <label className="form-check-label" htmlFor="user1">
                User 1
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="user2"
                value="User 2"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedUsers([...selectedUsers, e.target.value]);
                  } else {
                    setSelectedUsers(
                      selectedUsers.filter((u) => u !== e.target.value)
                    );
                  }
                }}
              />
              <label className="form-check-label" htmlFor="user2">
                User 2
              </label>
            </div>
          </div>

          {/* Footer */}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary me-2"
              onClick={() => setOpengroupmodal(false)}
            >
              Cancel
            </button>
            <button className="btn btn-success" onClick={handleCreateGroup}>
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupModal;
