import styled from "styled-components";

export const Container = styled.div`

    background-color: ${(props) =>  {switch (props.type) {
        case "barras": return '#ffffe6';
        case "potes": return '#e6f2ff';
        default: return '#ffcce6';
        }}};
    width: 25vw;
    min-width: 150px;
    max-width: 200px;
    height: 100vh;
    margin-right: 0;
    
    position: relative;


    div{
        position: absolute;
        width: 100%;
        left: 0; right: 0;
        margin: 0 auto;
        top: 20px;
        text-align: center;
    }
    .img-logo{
        width: 100px;

        transition: transform 0.4s;

        &:hover{
            transform: scale(1.2);
        }
    }

    nav{
        width: 90%;
        height: 50vh;
        max-height: 300px;

        position: relative;
        margin: auto;
        top: 50%; 
        transform: translateY(-50%);


        ul{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 10px;
            
        }

        li{
            background-color: ${(props) =>  {switch (props.type) {
                 case "barras": return '#ffaa00';
                  case "potes": return '#3396ff';
                 default: return '#e08585';
        }}};
            color: white;
            text-align: center;
            cursor: pointer;


            height: 25%;
            max-height: 70px;
            min-height: 40px;
            min-width: 100px;

            border: none;
            border-radius: 7px;
            position: relative;

            transition: filter 0.4s;

            &:hover{
                filter: brightness(0.8);
            }

            &.selected{
                background-color: #52527a;
                color: #e6f2ff;
            }

            

            p{
                position: relative;
                top: 50%; 
                transform: translateY(-50%);
            }
        }
    }

    .insta-logo{
        width: 20px;
        position: absolute;
        bottom: 20px;
        left: 10px;

        transition: transform 0.3s;

        &:hover{
            transform: scale(1.1);
            cursor: pointer;
        }
    }
@media screen and (max-width: 650px){
    
    transition: width 1s;
    
    .img-logo{
        width: 70px;
        left: 0;
    }
}

@media screen and (max-height: 400px){
    .img-logo{
        display: none;    
    }   
}

@media screen and (max-height: 330px){
    .insta-logo{
        display: none;    
    }   
}


@media screen and (max-width: 500px){
    .insta-logo{
        display: none;    
    }   
}
`