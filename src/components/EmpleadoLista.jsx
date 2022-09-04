import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import EmpleadoGrilla from "./EmpleadoGrilla";

const EmpleadoLista = () => {
  const [empleado, setEmpleado] = useState([
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=Default&mouthType=Twinkle&skinColor=Brown",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&hairColor=Blue&facialHairType=BeardMajestic&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Default&eyebrowType=UpDown&mouthType=Sad&skinColor=Pale",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Kurt&hairColor=Blue&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=Brown",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=BlazerShirt&clotheColor=PastelYellow&graphicType=Deer&eyeType=Close&eyebrowType=Default&mouthType=Eating&skinColor=Pale",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Prescription01&hatColor=PastelOrange&hairColor=Brown&facialHairType=Blank&facialHairColor=Blonde&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Side&eyebrowType=UpDown&mouthType=Default&skinColor=Tanned",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Wayfarers&hatColor=Pink&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=BlazerShirt&clotheColor=Red&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Serious&skinColor=Tanned",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hatColor=Blue03&hairColor=BlondeGolden&facialHairType=Blank&facialHairColor=Red&clotheType=Overall&clotheColor=Blue02&eyeType=Wink&eyebrowType=SadConcernedNatural&mouthType=Disbelief&skinColor=Brown",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=ScreamOpen&skinColor=Light",
    },
  ]);

  return (
    <div className="container">
      <ListGroup>
      {empleado.map((empleado) => {
          return <EmpleadoGrilla
              key={empleado.id}
              name={empleado.fullName}
              title={empleado.title}
              departament={empleado.department}
              pic={empleado.pic}
            ></EmpleadoGrilla>
        })}
      </ListGroup>
    </div>
  );
};

export default EmpleadoLista;
