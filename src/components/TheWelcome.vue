<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    <p>Start exploring our backend by reading the <a href="http://localhost:5000/swagger">Swagger documentation</a>. 
    On the same page, you can interact with our demo API.</p><br>

    <p>For more information, refer to the <a href="www.github.com">README.md</a> in our GitHub repository. 
    This document provides comprehensive details about the project setup, dependencies, and usage instructions.</p><br>

    <p>Need more details? Visit our <a href="www.jira.atlassian.com">Jira</a> to see the roadmap and development progress. 
    You can track issues, feature requests, and contribute to the project planning.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    <p>Our archetype is built on robust foundations, allowing you to develop from scratch to cloud within the same environment. 
    You can run our frontend or backend independently, using standalone execution, Docker, Docker Compose, and more.</p><br>

    <p>The backend core primarily uses Flask, which you can run with the appropriate Python interpreter. 
    We provide a module that converts Raspberry Pi pins and device access into an API blueprint as a demonstration. 
    OAuth flows are pre-configured, provided you follow the guidelines. Testing is handled using pytest and mock.</p><br>

    <p>The frontend boilerplate is the same as the one you are currently viewing. 
    This is the bare-bones Vite instance we use to jumpstart our projects. 
    Additionally, we have integrated support for modern JavaScript features and CSS preprocessors to streamline your development workflow.</p><br>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    <p>Our ecosystem is designed to be flexible and scalable, accommodating a wide range of project requirements. 
    We leverage a microservices architecture to ensure that each component can be developed, deployed, and scaled independently.</p><br>

    <p>We have a rich set of integrations with popular tools and services, including continuous integration and continuous deployment (CI/CD) pipelines, 
    monitoring and logging solutions, and cloud providers. This ensures that you can build, test, and deploy your applications with ease.</p><br>

    <p>Our community is active and supportive, with numerous resources available to help you get started and succeed. 
    Join our forums, attend our webinars, and participate in our hackathons to connect with other developers and share your experiences.</p><br>
  </WelcomeItem>
</template>
