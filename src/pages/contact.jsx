import IconButton from '@/components/Buttons/IconButton';
import Button from '@/components/Buttons/Button';
import Container from '@/components/Container';
import example from '@/assets/images/miniimg.png';
import cardProject from '@/assets/images/cards-project.png';
import Card from '@/components/Card/Card';
import img from '@/assets/icons/image 1.svg';
import Image from 'next/image';
import ProjectCard from '@/components/Card/ProjectCard';

function Contact() {
  return (
    <div>
      <Container>
        <Button as="button" variant="project">
          bnma
        </Button>
        <IconButton
          as="a"
          href="google.com"
          iconName="play"
          variant="socials"
        ></IconButton>
        <IconButton as="a" href="google.com" variant="analize">
          <Image src={img} height={70} alt="icon" />
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
        <ProjectCard href="#" src={cardProject} alt="card"></ProjectCard>
      </Container>
    </div>
  );
}

export default Contact;
