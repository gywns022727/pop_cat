import React, { useState } from "react";
import styled from "styled-components";
import Korea from "../assets/images/korea.svg";
import Japan from "../assets/images/japan.svg";
import Usa from "../assets/images/usa.svg";

export default function Rank() {
  const [menu, setMenu] = useState(false);
  const clickRank = () => {
    if (menu === true) {
      setMenu(!menu);
    } else {
      setMenu(true);
    }
  };

  return (
    <Wrap>
      <RankIcon onClick={clickRank}>🏆</RankIcon>
      {menu ? (
        <RankList>
          <RankBox onClick={clickRank}>
            <RankIcon onClick={clickRank} />
            <ul>
              <li>
                <div>
                  🥇 <img src={Korea} alt="korea" />
                </div>
                9,129,318,923
              </li>
              <li>
                <div>
                  🥈 <img src={Usa} alt="Usa" />
                </div>
                318,923
              </li>
              <li>
                <div>
                  🥉 <img src={Japan} alt="Japan" />
                </div>
                923
              </li>
            </ul>
          </RankBox>
        </RankList>
      ) : (
        ""
      )}
    </Wrap>
  );
}
const Wrap = styled.div`
  padding: 20px;
`;

const RankIcon = styled.div`
  width: 20px;
  font-size: 30px;
`;

const RankBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  > ul {
    width: 50%;
    > li {
      padding: 0 10px 0 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #000;
      height: 50px;
      > div {
        line-height: 25px;
        > img {
          width: 25px;
          border-radius: 5px;
          filter: drop-shadow(1px 1px 1px rgba(0 0 0 /0.5));
        }
      }
    }
  }
`;

const RankList = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 150px;
  border-radius: 0 0 10px 0;
  background-color: #fff;
`;
