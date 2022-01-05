import styled from 'styled-components'
import Analistic from './Analistic'
import FAQ from './FAQ'
import Earnings from './Earnings'
import Transfer from './Transfers'
import Sidebar from './Sidebar'
import ProFile from './ProFile'
import Messeges from './Messeges'


export default function Dashbord() {

    
    return (
        <Section>
            <Sidebar/>
            <div className="grid">
            <div className="row__one">
                <Analistic/>
                <FAQ />
            </div>
            <div className="row__two">
                <Earnings/>
                <Transfer/> 
                <ProFile/>
            </div>
                <Messeges />
            </div>
        </Section>
    )
}

const Section =styled.section`
margin-left:18wh;
height:100%;
.grid{
   padding:1rem;
    dispaly:flex;
    flex-direction:column;
    height:100%;
    gap:1rem;
    margin-top:2rem;
    .row__one{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        height:50%;
        gap:1rem;
    }
    .row__two{
        
        display:grid;
        grid-template-columns:repeat(3,1fr);
        height:50%;
        gap:1rem;
    }
}
@media screen and (min-width:280px ) and (max-width:950px){
    margin-left:0;
    .grid{
        .row__one{
            grid-template-columns:1fr;
        }
        .row__two{
            display: block;
            grid-template-columns:1fr;
        }  
    }
}
`;