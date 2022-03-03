import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card";
import NavBar from "../../Components/NavBar";
import PoPup from "../../Components/Po-pup";
import { Header, Container } from "./styles";
import api from "../../Services/api";

function Dashboard({ auth, setAuth }) {
  const [show, setShow] = useState();
  const [showTech, setShowTech] = useState(false);
  const [user, setUser] = useState([]);
  const [tech, setTech] = useState([]);

  const params = useParams();

  const getTech = () => {
    api.get(`/users/${params.id}`).then((res) => {
      setUser(res.data);
      setTech(res.data.techs);
      return;
    });
  };

  const addNewTech = (newTech) => {
    setTech([...tech, newTech]);
  };

  useEffect(() => {
    getTech();
  }, [show, showTech]);

  if (!auth) {
    return <Redirect to={"/"} />;
  }
  return (
    <Container>
      <NavBar setAuth={setAuth} />
      {user && (
        <Header>
          <h3>{user.name}</h3>
          <span>{user.course_module}</span>
        </Header>
      )}
      {tech && (
        <Card
          setShow={setShow}
          list={tech}
          showTech={showTech}
          setShowTech={setShowTech}
        />
      )}
      {show && <PoPup addNewTech={addNewTech} setShow={setShow} />}
    </Container>
  );
}
export default Dashboard;
