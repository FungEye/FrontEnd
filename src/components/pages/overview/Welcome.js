import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

const styles = {
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
    marginBottom: "0px",
  },
  welcomeText: {
    fontSize: "48px",
    color: "#EED1AB",
    fontFamily: "sans-serif",
  },
  motto: {
    fontFamily: "sans-serif",
    color: "#8f7c63",
  },
  footer: {
    height: "50px",
    backgroundColor: "#61734C",
    lineHeight: "50px",
    marginTop: "30%",
    alignItems: "center",
    width: "100%",
    color: "rgb(207, 207, 207)",
  },
};

function Welcome() {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/dashboard");
  }

  return (
    <Box sx={styles.welcomeContainer}>
      <Typography variant="h4" sx={styles.welcomeText}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: ["Welcome to FungEye!"],
          }}
        />
      </Typography>
      <Typography variant="h6" sx={styles.motto}>
        Empowering you to grow mushrooms like a pro.
      </Typography>
      <Button color="primary" onClick={handleClick}>
        Go to dashboard!
      </Button>
      <Typography sx={styles.footer}>
        Fungeye 2023
      </Typography>
    </Box>
  );
}

export default Welcome;
