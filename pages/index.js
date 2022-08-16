import MainContainer from "../components/MainContainer/MainContainer"
import { getAPIData } from "../api"

const Index = ({ image }) => {
    return (
        <MainContainer bgImage={image}>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa dolorum eum facere, fugit maxime nobis provident sint? Deleniti ea, tempora. Cupiditate error, eum quo quos repellat saepe sunt ut!</span><span>Aliquam architecto asperiores autem, consequatur doloribus eligendi, facilis fuga magnam obcaecati quis ratione reiciendis vitae voluptate. Ab deserunt eos eveniet facere libero, molestiae molestias nesciunt numquam qui, quidem, vero voluptatum?</span><span>Ab architecto blanditiis culpa delectus deserunt, dolorum et fuga fugit laborum laudantium nihil obcaecati quaerat ratione reprehenderit totam. Aliquam, doloribus eligendi enim exercitationem facilis labore nisi quia repellat totam voluptatem!</span><span>Adipisci harum magnam totam? Adipisci aliquid atque cum delectus eaque eius, exercitationem impedit ipsum labore modi nihil, nulla omnis pariatur, quae quam qui totam. Error iure magnam maiores nemo quos.</span></p>
        </MainContainer>
    );
}

export async function getStaticProps() {
    const data = await getAPIData('/planetary/apod');

    return {
        props: {image: data.hdurl}, // will be passed to the page component as props
    }
}

export default Index
