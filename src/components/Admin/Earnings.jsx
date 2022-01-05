import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReasubleStyle";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    data: 7200,
  },
  {
    data: 7300,
  },
  {
    data: 7400,
  },
  {
    data: 7800,
  },
  {
    data: 7300,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 6400,
  },
  {
    data: 6000,
  },
  {
    data: 3900,
  },
  {
    data: 3800,
  },
  {
    data: 3700,
  },
  {
    data: 3500,
  },
  {
    data: 3100,
  },
  {
    data: 3200,
  },
  {
    data: 3900,
  },
  {
    data: 2800,
  },
  {
    data: 4700,
  },
  {
    data: 2000,
  },
  {
    data: 2900,
  },
  {
    data: 6000,
  },
  {
    data: 5800,
  },
  {
    data: 4500,
  },
  {
    data: 5900,
  },
  {
    data: 8000,
  },
  {
    data: 6500,
  },
  {
    data: 9500,
  },
  {
    data: 5800,
  },
  {
    data: 5700,
  },
  {
    data: 5600,
  },
  {
    data: 5500,
  },
  {
    data: 5400,
  },
  {
    data: 5200,
  },
  {
    data: 5100,
  },
  {
    data: 4900,
  },
  {
    data: 4700,
  },
  {
    data: 4400,
  },
  {
    data: 4900,
  },
  {
    data: 4100,
  },
  {
    data: 4200,
  },
  {
    data: 4300,
  },
  {
    data: 5800,
  },
  {
    data: 4000,
  },
  {
    data: 6500,
  },
  {
    data: 2500,
  },
  {
    data: 8500,
  },
  {
    data: 7500,
  },
  {
    data: 6200,
  },
  {
    data: 7300,
  },
];
export default function Earnings() {
  return (
    <Section>
      <div className="Eartop">
        <div className="EarInfo">
          <h4>This month earnings</h4>
          <h1>$683.3</h1>
          <div className="growth">
            <span>+2.36</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={true} />
            <Area
              animationBegin={800}
              animationDuration={3000}
              type={"monotone"}
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyle}
  padding:2rem 0 0 0;
  margin-top: 0.8rem;
  .Eartop {
    .EarInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
       h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        span{
          margin-right:1rem;
        }
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: balck !important;
    }
  }
`;
