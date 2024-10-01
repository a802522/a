// modifyVIP.js

// 获取原始响应的内容
let obj = JSON.parse($response.body);

// 修改内容：模拟 VIP 状态
obj.data.super_player_value = 1;  // VIP 等级
obj.data.super_player_level = 1;  // VIP 等级
obj.data.svip_status = 1;         // 设置 VIP 状态为 true
obj.data.svip_left_days = 365;    // 设置 VIP 剩余天数为 365 天
obj.data.svip_expire_timestamp = Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60;  // 设置 VIP 有效期为一年

// 返回修改后的响应内容
$done({body: JSON.stringify(obj)});