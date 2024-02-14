import { Card } from "./card";

import Image from 'next/image'

export default function ProjectCard(
  {
    DeviceImg, 
    BackgroundImg, 
    GithubLink, 
    LiveLink,
    Title,
    Description
  }: any) 
{

  return (
    // <CardsContainer>
      <Card>
          <div className="info">
            <h1>{Title}</h1>
            <span>Personal Project | Web Development</span>

            <p>
              {Description}
            </p>

            <div className="buttons-container">
                <a
                  href={LiveLink}
                  target="__blank"
                >
                 Live preview
               </a>
      
                <a
                  href={GithubLink}
                  target="__blank"
                >
                 Github Repo
               </a>
       
            </div>
            

            
          </div>
          <div className="device-image">
            <Image
              src={DeviceImg}
              alt=""
              width={492}
              height={297}
              className="device"
            />
          </div>
          <Image
            src={BackgroundImg}
            alt=""
            width={804}
            height={520}
            className="background-img"
          />
        </Card>
    // </CardsContainer>
  )
}