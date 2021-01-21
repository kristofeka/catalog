import React from 'react';
import {Header, ListProduct} from '../components';



const Home = () => {
    return(
        <div style={styles.container}>
            <div style={styles.wrapHead}>
                <Header />
            </div>
        <ListProduct />
        </div>
    )
}
const styles = {
    container : {
        width: '100%'
    },
    wrapHead : {
        backgroundColor: '#35405A',
        height: 360,
        borderRadius: '0px 0px 24px 24px'
    }
}
export default Home;