<script>
    import Contact from './Contact.svelte';
    import Grid from 'svelte-grid-responsive';
</script>

<main>
    <Grid container gutter={12}>
        <Grid lg={2.5} md={2}/>
        <Grid lg={3.5} md={5} sm={12}>
            <section>
                <h2>Contact Us Now</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quos atque dicta
                    temporibus rerum voluptatem quisquam dolores officiis vero quas, culpa autem rem eligendi
                    nihil? Cupiditate odit ab enim? Praesentium.
                </p>
            </section>
        </Grid>
        <Grid lg={3.5} md={5} sm={12}>
            <div class="contact">
                <Contact/>
            </div>
        </Grid>
        <Grid lg={2.5} md={2}/>
    </Grid>
</main>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        gap: 1.5em;
        padding-left: 2em;
        padding-right: 2em;
    }

    .contact {
        padding-left: 2em;
        padding-right: 3em;
        padding-top: 2em;
        padding-bottom: 2em;
    }

    main {
        padding-top: 3em;
        padding-bottom: 3em;
    }
</style>
