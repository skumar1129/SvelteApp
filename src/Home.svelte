<script>
    import { replace } from 'svelte-spa-router';
    import { Jumbotron, Form, FormGroup, Input, Label, Button } from 'sveltestrap';
    let choices = ['Movie', 'Beer', 'Liquor', 'Food', 'Tv Show', 'Bar', 'Food'];
    let randomChoice = '';
    function makeChoice() {
        if (randomChoice) {
            replace(`/page/${randomChoice}`);
        }
        else {
            alert('Gotta make a choice');
        }
    }
</script>

<Jumbotron>
    <Form>
        <h1 class="display-3">Random Chooser When You Can't Make Up Your Mind</h1>
        <p class="lead">Choose something you can't make up your mind enough</p>
        <FormGroup>
            <Label>What can't you decide about?</Label>
            <Input type="select" name="select" bind:value={randomChoice}>
                <option></option>
                {#each choices as choice}
                    <option>{choice}</option>
                {/each}
            </Input>
        </FormGroup>
        <Button on:click={makeChoice}>Let's help decide</Button>
    </Form>
</Jumbotron>