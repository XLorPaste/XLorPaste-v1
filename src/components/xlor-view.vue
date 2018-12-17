<template>
    
</template>

<script>
export default {
    data() {
        return {

        };
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
    },
    mounted() {
        this.axios.get('/query/' + this.id).then(function(response) {
            var data = response.data;
            console.log(data);

        }.bind(this)).catch(function(error) {
            console.log(error);
            
        }.bind(this));
    }
};
</script>

<style>

</style>
