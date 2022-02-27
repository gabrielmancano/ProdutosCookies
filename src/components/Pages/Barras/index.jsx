import { useEffect, useState } from 'react';
import imgBarra1 from '../../../assets/barras/imgBarra1.jpg';
import imgBarra2 from '../../../assets/barras/imgBarra2.jpg';
import imgBarra3 from '../../../assets/barras/imgBarra3.jpg';
import { Container, Content } from './styles';

import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'

const Thumbnail = ({arr, image, index}) => {
    return <div className='thumbnail'>
        {
            arr.map((imgsrc, i) => (
                <img 
                    key={i} 
                    height="50" 
                    src={imgsrc} 
                    onClick={() => image(i)}
                    className={index === i ? 'active' : ''}
                />
            ))
        }
    </div>
}

const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState();

    useEffect(() => {
        setIndex(0)
    }, []);

    const next = () => {
        if (index === imgs.length - 1) {
            setIndex(0)
        } else {
            setIndex(index +  1)
        }
    }
    
    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1)
        } else {
            setIndex(index -  1)
        }
    }

    return <div className='slideshow'>
        <img className='mainImg' src={imgs[index]} />
        <div className='actions'>
            <button
                className='btnPrev' 
                onClick={prev}
            >
                <GrFormPreviousLink className='arrow' /> 
            </button>

            <button 
                className='btnNext' 
                onClick={next}
            > 
                <GrFormNextLink className='arrow' /> 
            </button>
        </div>
        <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
}


 export const Barras = () => {
    return(
        <Container>
            <Content>
                <h1>BARRAS</h1>

                <Slideshow className="mainImg"
                    imgs={[
                        imgBarra1,
                        imgBarra2,
                        imgBarra3
                    ]}
                    
                />
            </Content>
        </Container>
    )
}