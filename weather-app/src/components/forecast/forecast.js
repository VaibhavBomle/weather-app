import { Accordion, 
    AccordionItem,
     AccordionItemButton,
      AccordionItemHeading,
       AccordionItemPanel 
    } from "react-accessible-accordion";

const forecast = ({ data }) => {
    return (
        <>
            <label className="title">
                <Accordion allowZeroExpanded>
                    {data.list.splice(0, 7).map((item, index) => {
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Forecast
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel></AccordionItemPanel>
                        </AccordionItem>
                    })}
                </Accordion>
            </label>
        </>
    )
}

export default forecast;