import React from 'react'

let data = [
  {
    title:"Wednesday",
    description:"Wednesday is an American coming-of-age supernatural comedy horror television series based on the character Wednesday Addams by Charles Addams.",
    imgUrl:"https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc5URtqG36cHmUzXPrn9qaN1prCdZB3Llrhe8w4fvPKUxMp1phgN738mP1ctTe9QshMH8f0NlK-GdSAZDYJpXtvofUffd8o4BQuB7AKZogG-KbG0kR5H5w9kp3pXbogjGHSN.jpg?r=082"
  },
  {
    title:"MoneyHeist",
    description:"Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    imgUrl:"https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326"
  },
  {
    title:"Lucifer",
    description:"Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.",
    imgUrl:"https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdzLf-Q3OK2H03_O-TYenAtdtgEP9kHEK4Wov-JlvcJNPMiTwFtyZQ_eJ8yMtVrYzoc6mSbEyFAgqu9z-5P0-htUTbfc1AMpCtffuTkpgSJ_c8nM2GKlmkpcEHqoMsmfAmDY.jpg?r=501"
  }
]

export const Day1 = () => {

  let newObjData = data.map((eachObj, index)=>{
    return (<article key={index}>
    <h2>{eachObj.title}</h2>
    <img src={eachObj.imgUrl} alt="Title name"/>
    <p>{eachObj.description}</p>
    </article>
    )
  })
  return(
    <div>
      {newObjData}
    </div>
  )

}
