import Image from 'next/image';

import IconButton from '@/components/Buttons/IconButton';
import Button from '@/components/Buttons/Button';
import Container from '@/components/Container';
import example from '@/assets/images/miniimg.png';
import cardProject from '@/assets/images/cards-project.png';
import Card from '@/components/Card/Card';
import img from '@/assets/icons/image 1.svg';
import ProjectCard from '@/components/Card/ProjectCard';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

function Contact() {
  return (
    <div>
      <Container>
        <Navbar />
        <Button as="button" variant="primary">
          bnma
        </Button>
        <IconButton
          as="a"
          href="google.com"
          iconName="play"
          variant="socials"
        ></IconButton>
        <IconButton as="a" href="google.com" variant="analize">
          <Image src={img} height={70} width={60} alt="icon" />
        </IconButton>
        <Container />
        <p>Contact</p>
        <p>bnma</p>
        <Card src={example} alt="image">
          <div>
            <h1>Title</h1>
            <p>
              Мы не просто создаем веб-сайты, мы создаем мощный инструмент для
              развития вашего бизнеса в сфере digital. В создании Вашего сайта,
              мы всегда учитываем, его привлекательность и удобность, чтобы он
              был запоминающимся для посетителей.
            </p>
          </div>
        </Card>
        <div className="flex">
          <ProjectCard href="#" src={cardProject} alt="card"></ProjectCard>
          <ProjectCard href="#" src={cardProject} alt="card"></ProjectCard>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
