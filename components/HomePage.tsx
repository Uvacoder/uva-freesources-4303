import TypeIt from "typeit-react";
import React, {Fragment} from 'react';
import { useRouter } from 'next/router';
import { UnstyledButton, Text, Space, Grid, Card, Avatar, Group, Paper } from '@mantine/core';
import { IconBook2, IconBrandReact, IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconTools, IconNotes, IconUserCircle  } from '@tabler/icons';

function HomePage(){
    const router = useRouter();

    return (
       <Fragment>
        <Text 
            size={120} 
            align="center"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        >
            FreeSources
        </Text>
        <Text size={28} align="center">
            <TypeIt
                options={{
                    strings: ["Your site design building helper :)" , "React, HTML, CSS, JS and more"],
                    speed: 80,
                    loop: true,
                    startDelay: 1250,
                    loopDelay: 2250,
                    nextStringDelay: 4000,
                    waitUntilVisible: true,
                }}
            />
        </Text>

        <Space h="md" />
            
        <Grid>
            <Grid.Col md={6}>
                
                <Card shadow="sm" p="lg" radius="md" style={{ backgroundColor: "#3b3b3b", color: "#fcf0f0" }}>
                  <UnstyledButton onClick={ () => router.push('/blogroll/design')}>
                    <Group align="center">
                        <Avatar color="blue">
                            <IconBook2 size={24} />
                        </Avatar>
                        <Text size="lg" weight={600} color="indigo">My Blogroll</Text>
                    </Group>
                  </UnstyledButton>
                    <Space h="lg" />
                    <Space h="lg" />
                    <Text size={16}>
                        Some of my favorite bookmarks and links, my blogroll, resources, projects and more!
                    </Text>

                </Card>

            </Grid.Col>

            <Grid.Col md={6}>

                <Grid>
                {   [   
                        { icon: <IconBrandReact/>, title: "React",  color:"blue", href: "/resources/react/React/reactCss" },
                        { icon: <IconBrandHtml5/>, title: "HTML",  color: "red", href: "/resources/html/animations" },
                        { icon: <IconBrandCss3/>, title: "CSS",  color: "indigo", href: "/resources/css/fonts" },
                        { icon: <IconBrandJavascript/>, title: "JS",  color: "yellow", href: "/resources/javascript/javascript_utili" },
                        { icon: <IconTools/>, title: "Tools",  color: "cyan", href: "/resources/tools/color" },
                        { icon: <IconNotes/>, title: "Notes",  color: "purple", href: "/resources/notes/history" },
                        { icon: <IconUserCircle/>, title: "SocialLinks",  color: "green", href: "/links/sociallinks" },
                        // <IconBook/>
                    ]   
                    .map( (v,i) => (
                    <Grid.Col span={6} key={i}>
                        <Paper shadow="sm" p="lg" radius="md" style={{ backgroundColor: "#3b3b3b" }}>
                            <UnstyledButton onClick={ () => router.push(v.href)}>
                            <Group position="center">
                            <Avatar variant="filled" size={36} color={v.color}> 
                                {v.icon}
                            </Avatar>
                            <Text size={16} color="#fcf0f0"> {v.title} </Text>
                            </Group>
                            </UnstyledButton>
                        </Paper> 
                    </Grid.Col>
                    ))
                }
                </Grid>

            </Grid.Col>
        </Grid>

        <Space h="md" />
        <Text color="dimmed" size={12}>Last Update {new Date().toLocaleString('en-GB') || ""}</Text>

        </Fragment>
    )
}
    
export default HomePage
