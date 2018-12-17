<template>
    
</template>

<script>
export default {
    mounted() {
        this.$message({
            duration: 4000,
            message: 'Invalid Url',
            type: 'error'
        });
        this.router.replace({
            path: '/index'
        });
    }
};    
</script>

<style>

</style>
