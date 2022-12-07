import type { NextPage } from "next";
import Card from 'react-bootstrap/Card';
import BookingHistoryCard from "../../components/BookingHistoryCard";
import { trpc } from "../../utils/trpc";

const HistoryPage: NextPage = () => {

    const history = trpc.catalog.getBookingsOfUser.useQuery({ id: "" })

    const timeSlots = history.data?.spaces;


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

        {[1, 2, 3].map((item) => <BookingHistoryCard />)}
        {/* <br /> */}

    </>
}

export default HistoryPage
