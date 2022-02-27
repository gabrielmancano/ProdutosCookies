import styled from "styled-components";

export const Container = styled.div`
    
    position: relative;
    padding: 10px;

    width: 80vw;
    max-width: 1000px;
    height: 100vh;
    background: #ffffe6;

    h1{
        text-align: center;
        text-shadow: -2px 2px 1px black;
        margin-bottom: 20px;
        color: lightblue;
    }

    .slideshow{
        position: fixed;
    }

    .actions{
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        
        button{
            background: none;
            border: none;
            width: 30px;
            height: 30px;

            &.btnPrev{
                position: absolute;
                left: 15%;    
            }

            &.btnNext{
                position: absolute;
                right: 15%;    
            }
            

            .arrow{
             transform: scale(2.5);

             transition: transform 0.3s;

                &:hover{
                    transform: scale(2.8);
                }
            }
        }
    }

    .mainImg{
        display: block;
        width: 400px;
        margin: auto;
        border-radius: 5px;
    }

    .thumbnail{
        margin-top: 10px;
        text-align: center;
        
        img{
            margin-left: 7px;
            transition: transform 0.3s;

            &:hover{
                transform: scale(1.1);
            }
        }
    }

    .active{
        border: 1px solid rgba(0,0,0, 0.5);
        transform: scale(1.2);
        transition: all 0.3s;
    }

    .slideshow {
        position: relative;
    }


    @media screen and (max-width: 950px) {

        .mainImg{
            width: 350px;
    }
    
}

@media screen and (max-width: 800px) {
    button {
            display: none;
        }
}




    @media screen and (min-height: 1500px) {
        h1{
            margin-top: 150px;
            margin-bottom: 300px;
        }
    }
`


export const Content = styled.div`

    position: relative;
    width: 100%;
    margin: auto;

    max-width: 1000px;


    @media screen and (min-height: 700px) {

        h1{
            margin-bottom: 30px;
        }

        .thumbnail{
        margin-top: 15px;
        }
     
    }

    @media screen and (min-height: 900px) {
        
        top: 50%;
        transform: translateY(-60%);
    }
`