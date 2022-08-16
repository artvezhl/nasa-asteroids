import MainContainer from "../components/MainContainer/MainContainer"
import {getAPIData} from "../api"
import defaultBGImage from "../public/default.png"

const Orders = ({ image = "../public/default.png" }) => {
    return (
        <MainContainer bgImage={image}>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab asperiores aspernatur beatae dolorem fuga nulla numquam officia? Aliquam cumque dolor doloremque illum, necessitatibus nulla omnis quaerat quos reiciendis vitae.</span><span>Ab accusantium amet aperiam consequatur, delectus deserunt eligendi enim est expedita inventore iste nulla optio perferendis porro possimus quisquam quo sequi sit voluptate voluptatibus! Dolorem ducimus ea harum necessitatibus praesentium.</span><span>Alias consequatur consequuntur dolorem eveniet ipsa nesciunt? Accusantium cumque dicta dignissimos distinctio eaque, esse eum facilis harum magni minima optio porro quidem sapiente ut voluptas. Cupiditate delectus magni quasi sequi?</span><span>Accusamus adipisci animi architecto atque blanditiis dolor dolores et explicabo fugiat illum ipsum iure molestias mollitia necessitatibus non officia placeat praesentium quae, quaerat, quam reprehenderit repudiandae sequi tempora voluptate voluptatum.</span></p>
        </MainContainer>
    )
}

export async function getStaticProps() {
    const data = await getAPIData('/planetary/apod');

    return {
        props: {image: data.hdurl}, // will be passed to the page component as props
    }
}

export default Orders
