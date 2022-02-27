import { useEffect, useState } from 'react';

import img1 from '../../../assets/potes/imgPote1.jpg';
import img2 from '../../../assets/potes/imgPote2.jpg';
import img3 from '../../../assets/potes/imgPote3.jpg';
import img4 from '../../../assets/potes/imgPote4.jpg';
import img5 from '../../../assets/potes/imgPote5.jpg';

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


export const Potes = () => {
    return(
        <Container>
            <Content>
                <h1>POTES</h1>

                <Slideshow className="mainImg"
                    imgs={[
                        img1,
                        img2,
                        img3,
                        img4,
                        img5
                    ]}
                />
            </Content>
        </Container>
    )
}