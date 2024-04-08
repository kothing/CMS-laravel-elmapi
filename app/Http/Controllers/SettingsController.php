<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Setting;

class SettingsController extends Controller
{
    /**
     * Get settings
     *
     * @param \Illuminate\Http\Request $request
     * @return \App\Model\Setting
     */
    public function index(Request $request){
        $settings = Setting::findOrFail();

        return response($settings, 200);
    }

    /**
     * Update settings
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $settings = Setting::findOrFail();
        $settings->name = $request->name;
        $settings->description = $request->description;
        $settings->save();
        return response()->json(['success' => true]);
    }
}
