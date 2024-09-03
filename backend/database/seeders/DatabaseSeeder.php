<?php

namespace Database\Seeders;

use App\Models\chatHistory;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

//        User::factory()->create([
//            'name' => 'Test User',
//            'code' => 'test',
//            'email' => 'test@gmail.com',
//            'role' => 'admin',
//            'rooms' => '[1,2,3]',
//            'description' => 'อะไรเอ้่ย',
//            'avatar' => 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
//            'password' => Hash::make('1111'),
//        ]);

        chatHistory::factory()->create([
           'custId' => 'Udc58fac972b9291766343dc8f24632ba',
            'content' => 'สวัสดี',
            'contentType' => 'text',
        ]);
    }
}
