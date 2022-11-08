import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6c6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '971'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6f7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b90'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '10b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a21'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c01'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'fa9'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e7b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'cc9'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '710'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8a2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '167'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '3ce'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'e67'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e21'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'ada'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '4a2'),
    exact: true
  },
  {
    path: '/events',
    component: ComponentCreator('/events', 'fa9'),
    exact: true
  },
  {
    path: '/fleet',
    component: ComponentCreator('/fleet', '233'),
    exact: true
  },
  {
    path: '/sponsors',
    component: ComponentCreator('/sponsors', '41a'),
    exact: true
  },
  {
    path: '/team',
    component: ComponentCreator('/team', '0e1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c39'),
    routes: [
      {
        path: '/docs/Autonomy/',
        component: ComponentCreator('/docs/Autonomy/', 'd7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ComputerVision/',
        component: ComponentCreator('/docs/ComputerVision/', '73f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Controls/',
        component: ComponentCreator('/docs/Controls/', '91d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/',
        component: ComponentCreator('/docs/Electronics/', '038'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/FrameAndHull/',
        component: ComponentCreator('/docs/FrameAndHull/', '4a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting_started',
        component: ComponentCreator('/docs/getting_started', 'fdc'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '899'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
