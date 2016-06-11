angular.module('surveyapp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/dirPagination.html',
    "<ul class=\"pagination\" ng-if=\"1 < pages.length\"><li ng-if=\"boundaryLinks\" ng-class=\"{ disabled : pagination.current == 1 }\"><a href=\"\" ng-click=\"setCurrent(1)\">&laquo;</a></li><li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == 1 }\"><a href=\"\" ng-click=\"setCurrent(pagination.current - 1)\">&lsaquo;</a></li><li ng-repeat=\"pageNumber in pages track by $index\" ng-class=\"{ active : pagination.current == pageNumber, disabled : pageNumber == '...' }\"><a href=\"\" ng-click=\"setCurrent(pageNumber)\">{{ pageNumber }}</a></li><li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == pagination.last }\"><a href=\"\" ng-click=\"setCurrent(pagination.current + 1)\">&rsaquo;</a></li><li ng-if=\"boundaryLinks\" ng-class=\"{ disabled : pagination.current == pagination.last }\"><a href=\"\" ng-click=\"setCurrent(pagination.last)\">&raquo;</a></li></ul>"
  );


  $templateCache.put('templates/home.html',
    "<div ng-controller=\"survey-list\"><h2>List of Surveys <span style=\"font-size: 16px\"><input type=\"text\" ng-model=\"searchSurvey\" placeholder=\"Search for Survey\" style=\"height: 40px; margin: 0px 31px; padding: 0px 15px;width: 300px\"></span></h2><hr><div class=\"row\"><div class=\"col-md-12\"><div class=\"well well-sm\"><div class=\"table-responsive\"><table class=\"table\"><thead><tr><th><a href=\"#\">Title</a></th><th><a href=\"#\">Tagline</a></th><th>Actions</th></tr></thead><tbody><tr dir-paginate=\"survey in surveylist | searchFor:searchSurvey | itemsPerPage: pageSize | orderBy:'toString()':sortType:sortReverse\" current-page=\"currentPage\"><td>{{survey.title}}</td><td>{{survey.tagline}}</td><td><button type=\"button\" class=\"btn btn-primary\" ng-click=\"viewSurvey(survey.id)\">View</button></td></tr></tbody></table><dir-pagination-controls boundary-links=\"true\" template-url=\"templates/dirPagination.html\"></dir-pagination-controls></div></div></div></div></div>"
  );


  $templateCache.put('templates/viewSurvey.html',
    "<h3>{{currentSurvey.title}}</h3><!--Survey title--><h5>{{currentSurvey.tagline}}</h5><!--Survey tagline--><ul><li ng-repeat=\"question in currentSurvey.questions\"><a href=\"#\">{{question.title}}</a><form><ul class=\"list-unstyled\"><li ng-repeat=\"option in question.options\"><input type=\"radio\" name=\"{{question.id}}\" ng-click=\"selectedAnswer(question.id, option)\">{{option}}</li></ul></form><hr></li></ul><!--clsoing of questions form--><div ng-if=\"isloaded\"><button type=\"button\" name=\"button\" class=\"btn\" ng-click=\"submitSurvey()\">Submit</button></div>"
  );

}]);
