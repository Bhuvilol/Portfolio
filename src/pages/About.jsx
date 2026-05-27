import LinkPreview from '../components/LinkPreview';
import SectionHeading from '../components/SectionHeading';

const ODISHA_DAO_PREVIEW = {
  url: 'https://x.com/OdishaDAO',
  image: '/odishadao.png',
};

const About = () => (
  <section id="about" className="py-12 px-6 relative">
    <SectionHeading className="mb-4">about</SectionHeading>
    <p className="text-base text-hacker-muted max-w-3xl mb-4 leading-relaxed">
      I'm Bhabesh — a CSE (Cybersecurity) undergrad at ITER, SOA University, currently shipping LLM pipelines, Web3 systems, and full-stack platforms that occasionally survive their first demo. Winner of the UIDAI Data Hackathon, honorary mention at ETHIndia 2025, and recently presented TrustSeal at PROXIMA 2026 to 1000+ industry folks without my slides crashing. CGPA 9.1, if that's the kind of thing you care about.
    </p>
    <p className="text-base text-hacker-muted max-w-3xl leading-relaxed">
      Most days I'm juggling terminal windows and caffeine, chasing bugs like they owe me money. When I'm not debugging at 2AM, I'm knee-deep in Web3 explorations with{' '}
      <LinkPreview
        url={ODISHA_DAO_PREVIEW.url}
        image={ODISHA_DAO_PREVIEW.image}
        className="text-hacker-text hover:text-hacker-green transition-colors underline underline-offset-4 decoration-hacker-border hover:decoration-hacker-green"
      >
        <a href={ODISHA_DAO_PREVIEW.url} target="_blank" rel="noopener noreferrer">
          @OdishaDAO
        </a>
      </LinkPreview>
      , running workshops for 1500+ students across DSC, ODISHA DAO, and Cloud Community Bhubaneswar, or Googling "how to center a div" for the 47th time. I like my code like my coffee — strong, slightly unpredictable, and occasionally responsible for a segfault. Breaking stuff (safely) is half the fun.
    </p>
  </section>
);

export default About;
