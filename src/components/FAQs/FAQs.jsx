import Accordion from "../Accordion/Accordion";
import './FAQs.scss';

const accordionData = [
    {
        question: "How much does a new website cost?",
        answer: "Website development is fully customizable, tailoring to the client’s requirements. Depending on the requirements and the method you choose to build your website, the cost keeps varying."
    },
    {
        question: "Do you only create WordPress websites?",
        answer: "Websites can be developed using other platforms like Shopify, Laravel, and many more but, WordPress is the one that is standing out of the crowd."
    },
    {
        question: "Will you maintain my site for me?",
        answer: "Regular maintenance is essential for a website to stabilize its flexibility and reliability. Proper maintenance would help in ensuring your website’s security, invite new visitors, boost traffic and more."
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Developing a responsive website will help in increasing the look and feel of your website on both small and large devices. It also increases the number of visitors, rankings in search engines."
    },
    {
        question: "How long does it take to build a website?",
        answer: "If you have chosen a professional website development company, then it would take around 1 to 4 months starting from scratch till the end for basic information websites with less functionality."
    },
    {
        question: "What if I need help on my site down the road?",
        answer: "You can approach us whenever you need our assistance. Our team can sort it out and bring your site back with its functionality."
    }
];



function FAQs() {



    return (
        <div className="FAQs bg-gray-200 p-4 rounded-lg container mx-auto relative top-10">
            {accordionData.map((item, idx) => (
                <Accordion key={idx} item={item} />
            ))}

        </div>
    );
}

export default FAQs;
