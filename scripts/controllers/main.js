'use strict';

angular.module('GbinghanComApp')
        .controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
})
        .controller('AboutCtrl', function($scope) {

  $scope.contactInfo = [
    {
      name: 'Github',
      icon: 'icon-github',
      value: 'https://github.com/stiucsib86/'
    },
    {
      name: 'Google+',
      icon: 'icon-google-plus',
      value: 'https://plus.google.com/118074586151096683331/posts'
    },
    {
      name: 'Twitter',
      icon: 'icon-twitter',
      value: 'https://www.twitter.com/stiucsib86'
    },
    {
      name: 'BitBucket',
      icon: 'icon-bitbucket',
      value: 'https://bitbucket.org/stiucsib86'
    },
    {
      name: 'LinkedIn',
      icon: 'icon-linkedin',
      value: 'http://www.linkedin.com/pub/bing-han-goh/14/4a9/983'
    }
  ];

  $scope.workExperience = [
    {
      'Company Name': 'Paywhere Pte Ltd',
      'Logo': '/images/company/paywhere.png',
      'Country': 'Singapore',
      'Position': 'Product and Platform Developer.',
      'Duration': 'July 2011 – Present'
    },
    {
      'Company Name': 'Aeturnus E-Solutions LLP',
      'Logo': '/images/company/aeturnus.png',
      'Country': 'Singapore',
      'Position': 'Application Developer',
      'Duration': 'December 2010 – October 2012',
      '': ''
    }
  ];

})
        .controller('PortfolioCtrl', function($scope) {

  $scope.portfolioList = [
    {
      'title': 'GreenHub Serviced Office PTE. LTD. Corporate Website',
      'screenshot': '/images/portfolio/greenhub.co.id.png',
      'date': '2013-08-17',
      'url': 'http://greenhub.co.id',
      'details': {
        'Project Type': 'Freelance',
        'Status': 'On-going',
        'Language': 'PHP, HTML,  Javascript',
        'Engine/Platform': 'Wordpress'
      }
    },
    {
      'title': 'Get Maid App',
      'screenshot': '/images/portfolio/getmaidapp.png',
      'date': '2013-04-30',
      'url': '',
      'details': {
        'Project Type': 'Freelance',
        'Status': 'On-going',
        'Language': 'PHP, HTML, Javascript',
        'Engine/Platform': 'Codeigniter, AngularJS'
      }
    },
    {
      'title': 'TasteBuds iOS App',
      'screenshot': '/images/portfolio/tastebuds-ios.png',
      'date': '2013-03-30',
      'url': '',
      'details': {
        'Project Type': 'Freelance',
        'Status': 'Completed',
        'Language': 'Javascript',
        'Engine/Platform': 'Titanium SDK'
      }
    },
    {
      'title': 'Z L Construction Corporate Website',
      'screenshot': '/images/portfolio/zlconstruction.com.sg.png',
      'date': '2012-12-30',
      'url': 'http://zlconstruction.com.sg',
      'details': {
        'Project Type': 'Freelance',
        'Status': 'Completed',
        'Language': 'PHP, HTML, Javascript',
        'Engine/Platform': 'Wordpress'
      }
    },
    {
      'title': 'TasteBuds App Website',
      'screenshot': '/images/portfolio/tastebuds-app.com.png',
      'date': '2012-11-30',
      'url': 'http://zlconstruction.com.sg',
      'details': {
        'Project Type': 'Freelance',
        'Status': 'Completed',
        'Language': 'PHP, HTML, Javascript',
        'Engine/Platform': 'Wordpress'
      }
    },
    {
      'title': 'PayWhere PTE. LTD.',
      'screenshot': '/images/portfolio/tackthis.com.png',
      'date': '2011-07-01',
      'url': 'http://www.tackthis.com',
      'details': {
        'Job Description': 'Platform Engineer for TackThis.com',
        'Project Type': '(Joined as employee)',
        'Status': 'On-going',
        'Language': 'PHP, HTML, Javascript',
        'Engine/Platform': 'TackThis!'
      }
    },
    {
      'title': 'Kent Ridge Hall Intranet',
      'screenshot': '/images/portfolio/kentridge.nus.edu.sg.png',
      'date': '2008-12-30',
      'url': 'http://kentridge.nus.edu.sg/intranet/',
      'details': {
        'Project Type': 'University (NUS) Curricular Activity',
        'Status': 'Completed',
        'Language': 'C#, HTML, Javascript',
        'Engine/Platform': 'ASP.NET'
      }
    }
  ];

});