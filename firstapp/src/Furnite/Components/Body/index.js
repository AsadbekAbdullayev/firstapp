import React, { Component } from 'react'
import {Container, Body1 } from './styles'
export default class Body extends Component {

    render() {
        
        const Title = ['All','New Arrivals','Furniture','All','New Arrivals','Furniture','All','New Arrivals','Furniture',]
        return (
           
            <Container>
                <Container.SecBody>
               {
                   Title.map((v)=>{
                       return(
                        <Container.SecBodyTitle>
                        {v}
                    </Container.SecBodyTitle>
                       )
                   })
               }
                
                </Container.SecBody>


            <Body1>
                <Body1.Titless>

                    <Body1.Title1>
                    TOP COLLECTIONS 2022
                    </Body1.Title1>

                    <Body1.Title2>
                    We Serve Your 

                   Dream Furniture
                    </Body1.Title2>

                    <Body1.Title3>
                    Get 50% off all products
                    </Body1.Title3>

                    <Body1.TitleBtn>
                    SHOP NOW
                    </Body1.TitleBtn>

                </Body1.Titless>



               <Body1.BigImg/>
               <Body1.Imgs>
                   <Body1.Img>
                       <Body1.Imge/>

                       <Body1.ImgeP>
                       $120
                       </Body1.ImgeP>

                        <Body1.ImgT>
                        Office Desk Chair
                        </Body1.ImgT>
                   </Body1.Img>

                   <Body1.Img>
                       <Body1.Imge/>

                       <Body1.ImgeP>
                       $120
                       </Body1.ImgeP>

                        <Body1.ImgT>
                        Office Desk Chair
                        </Body1.ImgT>
                   </Body1.Img>

                   <Body1.Img>
                       <Body1.Imge/>

                       <Body1.ImgeP>
                       $120
                       </Body1.ImgeP>

                        <Body1.ImgT>
                        Office Desk Chair
                        </Body1.ImgT>
                   </Body1.Img>
                   
               </Body1.Imgs>
            </Body1>
            </Container>
        )
    }
}

