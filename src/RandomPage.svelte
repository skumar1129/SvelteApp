<script>
    export let params = {};
    let idea = '';
    let ideas = [];
    let decision = '';
    import { replace } from 'svelte-spa-router';
    import { Jumbotron, Button, Col, Row, Input, Form, ListGroup, ListGroupItem } from 'sveltestrap';
    function goBack() {
        replace('/');
    }
    function addIdea() {
        if (idea) {
            ideas = ideas.concat(idea);
        }
        else {
            alert('Gotta type in an idea');
        }
    }
    function removeIdea() {
        if (ideas.length > 0) {
            ideas = ideas.slice(0, ideas.length - 1);
        }
        else {
            alert('Can\'t remove what aint there');
        }
    }
    function decideChoice() {
        if (ideas.length > 0) {
            let choiceIndex;
            choiceIndex = Math.floor(Math.random() * ideas.length);
            decision = `The move for ${params.pick} is ${ideas[choiceIndex]}`;
        }
        else {
            alert('Gotta add some ideas');
        }
    }
</script>

<Jumbotron>
    <Button on:click={goBack}>Go back</Button>
    <Form>
        <h1 class="display-2">Add some ideas for {params.pick}</h1>
        <Input 
        type="text"
        placeholder="Put those ideas here"
        bind:value={idea}
        >
        </Input>
    </Form>
    <Button on:click={addIdea}>Add Idea</Button>
    <Button on:click={removeIdea}>Remove Last Idea</Button>
    <p class="lead">Here is a list of ideas that may get chosen</p>
    <ListGroup>
        {#each ideas as idea}
            <ListGroupItem>{idea}</ListGroupItem>
        {/each}
    </ListGroup>
    <Button on:click={decideChoice}>Randomly Decide One</Button>
    <h4 class="display-4">{decision}</h4>
</Jumbotron>