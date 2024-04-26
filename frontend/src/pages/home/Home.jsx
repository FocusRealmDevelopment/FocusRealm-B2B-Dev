// import React from 'react';
import styles from "./home.module.css";
import Home_Figure from "../../assets/images/Home_Figure.png";
import Card from "./homeComponents/Card/Card";
import eng from "../../assets/images/eng.png";
import chemistry from "../../assets/images/chemistry.png";
import hindi from "../../assets/images/hindi.png";
import physics from "../../assets/images/physics.png";
import Container from "./homeComponents/Container/Container";
import Card2 from "./homeComponents/Card2/Card2";
import Card3 from "./homeComponents/Card3/Card3";

const Home = () => {
  return (
    <div className={`${styles.body} p-5`}>
      <div className={`w-full p-4 text-white ${styles.bgContainer}`}>
        <div className="w-4/6">
          <h1 className="text-2xl relative z-50">
            NEET & IIT Entrances Are Nearby
          </h1>
          <p className="mt-3 relative z-50">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <div className="p-3 mt-2 text-center rounded-3xl bg-white w-[50%] text-black relative z-50">
            View Details
          </div>
        </div>
        <div className="absolute -top-[32%] z-50 right-0">
          <img className="w-[180px]" src={Home_Figure} alt="home-figure" />
        </div>
      </div>
      <div className={`my-5 ${styles.homeComponentContainer}`}>
        <Container heading={"Study Materials"}>
          <Card logo={eng} language={"English"} materials={"304"} />
          <Card logo={chemistry} language={"Chemistry"} materials={"442"} />
          <Card logo={hindi} language={"Hindi"} materials={"104"} />
          <Card logo={physics} language={"Physics"} materials={"389"} />
        </Container>
        <Container heading={"Your Tests"}>
          <Card2
            questions={"12"}
            title={"Chemistry Diagnostic Test"}
            subject={"Chemistry"}
            completion={40}
          />
          <Card2
            questions={"30"}
            title={"Electronics-Weekly Test 03"}
            subject={"Physics"}
            completion={20}
          />
          <Card2
            questions={"50"}
            title={"Tenses & Active & Passive"}
            subject={"English"}
            completion={30}
          />
          <Card2
            questions={"10"}
            title={"Complete Genetics -Test 03"}
            subject={"Biology"}
            completion={80}
          />
        </Container>
        <Container heading={"Assignments"}>
          <Card3
            title={"Matter and Measurement"}
            dueDate={"Due on April 28"}
            subject={"Chemistry"}
            teacher={"Amrutha R"}
          />
          <Card3
            title={"Atoms, Molecules"}
            dueDate={"Due on April 28"}
            subject={"Chemistry"}
            teacher={"Suchetha"}
          />
          <Card3
            title={"Thermo & Radio Activity"}
            dueDate={"Due on April 28"}
            subject={"Physics"}
            teacher={"Shyam Sundar"}
          />
          <Card3
            title={"Organic Chemistry"}
            dueDate={"Due on April 28"}
            subject={"Chemistry"}
            teacher={"Deepika"}
          />
        </Container>
      </div>
    </div>
  );
};

export default Home;
