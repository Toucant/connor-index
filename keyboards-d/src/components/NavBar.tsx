import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  // tab in between links
  // center the table
  return (
    <div>
      <nav>
        <table
          style={
            //center the table
            {
              margin: "0 auto",
              width: "100%",
              border: "1px solid black",
              borderCollapse: "collapse",
              textAlign: "center",
              padding: "10px",
              backgroundColor: "#f5f5f5",
            }
          }
        >
          <tbody>
            <tr>
              <td>
                <Link to="/">Home</Link>
              </td>
              <td>
                <Link to="/create-task">Create Task</Link>
              </td>
              <td>
                <Link to="/create-user">Create User</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    </div>
  );
};

export default NavBar;
