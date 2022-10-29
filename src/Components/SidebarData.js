import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [

     {
          title: 'Home',
          path: '/announcements',
          icon: <AiIcons.AiFillHome />

     },
     {
          title: 'Announcements',
          path: '/products',
          icon: <FaIcons.FaCartPlus />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,

          subNav: [
               {
                    title: 'Grade 12',
                    path: '/announcements/users',
                    icon: <IoIcons.IoIosPaper />
               },
               {
                    title: 'Grade 11',
                    path: '/announcements/revenue',
                    icon: <IoIcons.IoIosPaper />
               },
               {
                    title: 'Grade 10',
                    path: '/announcements/revenue',
                    icon: <IoIcons.IoIosPaper />
               }

          ]

     },

     {
          title: 'Profile',
          path: '/products',
          icon: <FaIcons.FaCartPlus />
     },
     {
          title: 'Team',
          path: '/team',
          icon: <IoIcons.IoMdPeople />
     },

     {
          title: 'Grade 12',
          path: '/reports',
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,

          subNav: [
               {
                    title: 'Accounting',
                    path: '/reports/reports1',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Physical Science',
                    path: '/reports/reports2',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Mathematics',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />
               },
               {
                    title: 'Life Science',
                    path: '/reports/reports1',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Agriculture',
                    path: '/reports/reports2',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Business Studies',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />
               },
               {
                    title: 'Economics',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />
               }


          ]
     },
     {
          title: 'Grade 11',
          path: '/messages',

          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [
               {
                    title: 'Accounting',
                    path: '/reports/reports1',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Physical Science',
                    path: '/reports/reports2',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Mathematics',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />
               },
               {
                    title: 'Life Science',
                    path: '/reports/reports1',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Agriculture',
                    path: '/reports/reports2',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Business Studies',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />
               },
               {
                    title: 'Economics',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />
               }
          ]


     }
     ,
     {
          title: 'Grade 10',
          path: '/messages',

          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,

          subNav: [
               {
                    title: 'Accounting',
                    path: '/reports/reports1',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Physical Science',
                    path: '/reports/reports2',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Mathematics',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />
               },
               {
                    title: 'Life Science',
                    path: '/reports/reports1',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Agriculture',
                    path: '/reports/reports2',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'sub-nav'
               },
               {
                    title: 'Business Studies',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />
               },
               {
                    title: 'Economics',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />
               }
          ]

     },

     {
          title: 'Support',
          path: '/support',
          icon: <IoIcons.IoMdHelpCircle />
     }
];
