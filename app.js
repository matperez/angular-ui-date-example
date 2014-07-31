/**
 * Created by andrey on 31.07.14.
 */
moment.locale('ru');
var app = angular.module('App', ['ui'])
	.controller('MyController', function($scope) {
		// datepicker on select action
		var onSelect = function(date, obj) {
			var
				$this = $(obj.input),
				id = $this.attr('id'),
				$dateTo = $('#date-to'),
				$sportFrom = $('#sport-from'),
				$sportTo = $('#sport-to'),
				thisDate = moment(date, 'L').format('L'),
				nextDate = moment(date, 'L').add(7, 'days').format('L');


			if (id === 'date-from') {

				$dateTo.datepicker('option', {
					minDate: thisDate
				});

				if ($dateTo.attr('data-set-by-user') !== 'true') {
					$dateTo.datepicker('setDate', nextDate);
				}

				$sportFrom.datepicker('option', {
					minDate: thisDate
				});
				$sportFrom.datepicker('setDate', thisDate);
				
				$sportTo.datepicker('option', {
					minDate: thisDate
				});
				$sportTo.datepicker('setDate', thisDate);
				
			} else if (id === 'date-to') {

				$this.attr('data-set-by-user', 'true');

			}

		};

		// datepicker options
		$scope.dateOptions = {
			changeYear: true,
			changeMonth: true,
			yearRange: '1900:+1',
			minDate: '+1',
			dateFormat: 'dd.mm.yy',
			onSelect: onSelect
		};

		$scope.getDiff = function() {
			var to = moment($('#date-to').datepicker('getDate'), 'L'),
				from = moment($('#date-from').datepicker('getDate'), 'L');

			return to.diff(from, 'days');
		};

		$scope.dateFrom = new Date(moment().add(1, 'days').format());
		$scope.dateTo = new Date(moment().add(7, 'days').format());
		$scope.sportFrom = new Date(moment().add(1, 'days').format());
		$scope.sportTo = new Date(moment().add(7, 'days').format());
	});
