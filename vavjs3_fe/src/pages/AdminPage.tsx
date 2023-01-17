import axios from "axios";
import React, { FC, useEffect } from "react";
import Register from "../components/Register";
import RegisterAdmin from "../components/RegisterAdmin";
import UserInformation from "../components/UserInformation";
import { API_HOST } from "../config";

export type AdminProps = {
    /* insert props */
  }

export const Admin: FC<AdminProps> = (props) => {
  const [users, setUsers] = React.useState([]);
  const [adUrl, setAdUrl] = React.useState("");
  const [adImageUrl, setAdImageUrl] = React.useState("");
  const [adCount, setAdCount] = React.useState(0);

  const fetchUsers = async () => {
    axios.get(`${API_HOST}/user/all`).then((res) => {
      setUsers(res.data);
    }
    ).catch((err: any) => {
      console.log(err);
    }
    )
  };
  

  useEffect(() => {
    fetchUsers();
    axios.get(`${API_HOST}/advertisement`).then((res) => {
      setAdUrl(res.data.adUrl);
      setAdImageUrl(res.data.adImageUrl);
      setAdCount(res.data.adCount);
    }).catch((err: any) => {
      console.log(err);
    })
  }, []);

  const setAd = () => {
    axios.post(`${API_HOST}/advertisement`, {
      adUrl: adUrl,
      adImageUrl: adImageUrl,
      adCount: adCount
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  };

  const restartCounter = () => {
    axios.get(`${API_HOST}/advertisement/restart`).then((res) => {
      console.log(res.data);
      setAdCount(0);
    }
    ).catch((err) => {
      console.log(err);
    }
    )
  }

  const handleDelete = (id: string) => {
    axios.delete(`${API_HOST}/user/${id}`).then((res) => {
      setUsers(users.filter((user: any) => user.id !== id));
    }).catch((err) => {
      console.log(err);
    })
  }

  const exportUsersCSV = () => {
    // export users array as csv
    const csv = users.map((user: any) => {
      return `${user.id},${user.email},${user.name},${user
        .createdAt},${user.updatedAt},${user.isAdmin}`;
    }).join("\n");
    const csvData = new Blob([csv], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvData);
    const tempLink = document.createElement("a");
    tempLink
      .setAttribute("href", csvUrl);
    tempLink.setAttribute("download", "users.csv");
    tempLink.click();
  }



  return (
    <div className={"admin"}>
      <RegisterAdmin fetchUsers={fetchUsers}/>
      {users.map((user: any) => {
        if (user.login != "admin"){
        return (
         <UserInformation user={user} deleteUser={handleDelete}/>
        )
        }
      })}
      <button onClick={() => exportUsersCSV()}>EXPORT CSV</button>
      <img src={adImageUrl} alt="ad" />
      <h1>AdUrl</h1>
      <input type="text" value={adUrl} onChange={(e) => setAdUrl(e.target.value)} />
      <h1>AdImageUrl</h1>
      <input type="text" value={adImageUrl} onChange={(e) => setAdImageUrl(e.target.value)} />
      <button onClick={() => setAd()}>Update</button>
      <h3>Ad count: {adCount}</h3>
      <button onClick={() => restartCounter()}>Restart counter</button>
    </div>
  );
};


export default Admin;