import React from 'react';

const LoadingAnimation = () => (
  <svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-flickr" style={{background: 'none'}}><circle ng-attr-cx="{{config.cx1}}" cy={50} ng-attr-fill="{{config.c1}}" ng-attr-r="{{config.radius}}" cx="38.0173" fill="#fa4238" r={20}><animate attributeName="cx" calcMode="linear" values="30;70;30" keyTimes="0;0.5;1" dur={1} begin="-0.5s" repeatCount="indefinite" /></circle><circle ng-attr-cx="{{config.cx2}}" cy={50} ng-attr-fill="{{config.c2}}" ng-attr-r="{{config.radius}}" cx="61.9827" fill="#002b49" r={20}><animate attributeName="cx" calcMode="linear" values="30;70;30" keyTimes="0;0.5;1" dur={1} begin="0s" repeatCount="indefinite" /></circle><circle ng-attr-cx="{{config.cx1}}" cy={50} ng-attr-fill="{{config.c1}}" ng-attr-r="{{config.radius}}" cx="38.0173" fill="#fa4238" r={20}><animate attributeName="cx" calcMode="linear" values="30;70;30" keyTimes="0;0.5;1" dur={1} begin="-0.5s" repeatCount="indefinite" /><animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" ng-attr-dur="{{config.speed}}s" repeatCount="indefinite" dur="1s" /></circle></svg>
);

export default LoadingAnimation;
