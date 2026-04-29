<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_guests_are_redirected_from_the_app_shell()
    {
        $response = $this->get('/');

        $response->assertRedirect('/login');
    }
}
