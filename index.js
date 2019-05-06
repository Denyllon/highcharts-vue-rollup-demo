import Vue from 'Vue'
import { Chart } from 'highcharts-vue'

new Vue({
    el: "#app",
    render(createElement) {
        return createElement('highcharts', {
            props: {
                options: this.chartOptions
            }
        })
    },
    components: {
        highcharts: Chart
    },
    data() {
        return {
            chartOptions: {
                series: [{
                    data: [1, 2, 3]
                }]
            }
        }
    }
})
