import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Card from 'react-bootstrap/Card';
import BookingHistoryCard from "../../components/BookingHistoryCard";
import { trpc } from "../../utils/trpc";

const HistoryPage: NextPage = () => {

    const { data: sessionData } = useSession();

    const history = trpc.catalog.getMyBookings.useQuery()

    const timeSlots = history.data?.spaces;


    console.log(history)


    return <>

        {/* <Card className="my-3 mx-3">
            <Card.Img variant="top" src="assets/img/demo-image-01.jpg" style={{ maxHeight: "200px" }} />
            <Card.Body>
                <Card.Text>
                    <p className="card-text">Text0</p>
                    <p className="card-text">Text1</p>
                </Card.Text>
            </Card.Body>
        </Card> */}

        {history.data?.spaces.map((item) => <BookingHistoryCard key={item.id} history={item} image={"assets/img/demo-image-01.jpg"} />)}
        {/* <br /> */}

    </>
}

export default HistoryPage
